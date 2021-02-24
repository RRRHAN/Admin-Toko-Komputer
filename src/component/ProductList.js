import React, { Component } from "react"

export class listProduk extends Component {
	render() {
		return (
			<div className='col-lg-6 col-sm-12 p-2'>
				<div className='card'>
					<div className='card-body row'>
						{/* menampilkan Gambar / cover */}
						<div className='col-5'>
							<img
								src={this.props.image}
								className='img'
								height='200px'
								width='200px'
								size='contain'
								alt={this.props.name}
								style={{ objectFit: "contain" }}
							/>
						</div>

						{/* menampilkan deskripsi */}
						<div className='col-7'>
							<h5 className='text-info'>{this.props.name}</h5>
							<h6 className='text-danger'>Price: {this.props.price}</h6>
							<h6 className='text-dark'>Stock: {this.props.stock}</h6>

							{/* button untuk mengedit */}
							<button
								className='btn btn-sm btn-primary m-1'
								onClick={this.props.onEdit}
							>
								Edit
							</button>

							{/* button untuk menghapus */}
							<button
								className='btn btn-sm btn-danger m-1'
								onClick={this.props.onDrop}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default listProduk
