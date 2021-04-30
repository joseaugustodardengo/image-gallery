import "./style.scss";

interface Props {
  id: string,
  title: string,
  imagePhoto: string,
  author: string,
  width: number,
  height: number,
  imageDownload: string
}

export function Modal({ id, imagePhoto, title, author, width, height, imageDownload }: Props) {
  return (
    <div className="modal fade" id={id} role="dialog" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img className="d-block w-100" src={imagePhoto} alt={title} />
          </div>

          <div className="modal-footer justify-content-center flex-column">
            <span>Autor:</span>
            <p>{author}</p>
            <span>Largura:</span>
            <p>{width}</p>
            <span>Altura:</span>
            <p>{height}</p>
            <span>Download:</span>
            <a href={imageDownload} target="_blank" type="button" className="btn-floating btn-sm btn-fb">Download da imagem</a>
            <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
