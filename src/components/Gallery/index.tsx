import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Photosdata } from '../../../types';
import "./style.scss"
import { Modal } from "../Modal";

export function Gallery() {
  const [photos, setPhotos] = useState<Photosdata[]>([]);
  const accessKey = process.env.REACT_APP_ACCESS_KEY;

  useEffect(() => {
    api.get(`photos/random?client_id=${accessKey}&count=30&orientation=squarish`)
      .then(res => setPhotos(res.data))
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {photos.map(photo => (
          <>
            <div className="col-md-4" key={photo.id}>
              <img
                src={photo.urls.regular}
                alt={photo.alt_description}
                className="img-fluid"
                data-target={`#${photo.id}`}
                data-toggle="modal"
              />
            </div>

            {photo.description ?
              <Modal
                id={photo.id}
                title={photo.description}
                imagePhoto={photo.urls.full}
                author={photo.user.name}
                width={photo.width}
                height={photo.height}
                imageDownload={photo.links.download}
              />
              :
              <Modal
                id={photo.id}
                title={photo.alt_description}
                imagePhoto={photo.urls.full}
                author={photo.user.name}
                width={photo.width}
                height={photo.height}
                imageDownload={photo.links.download}
              />
            }
          </>
        ))}
      </div>
    </div>
  )
}
