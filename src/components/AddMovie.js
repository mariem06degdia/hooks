
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
function AddMovie({ addMovie }) {
  const [show, setShow] = useState(false);
  const [newSimpson, setNewSimpson] = useState({
    movieName: "",
    description: "",
    imgUrl: "",
    rating: 1,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChanges = () => {
    addMovie({ ...newSimpson, id: Math.random() });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a simpson
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a simpson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>simpson name</Form.Label>
              <Form.Control
                placeholder="type movie name here"
                autoFocus
                value={newSimpson.movieName}
                onChange={(e) =>
                  setNewSimpson({ ...newSimpson, SimpsonName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                placeholder="type movie description here"
                autoFocus
                value={newSimpson.description}
                onChange={(e) =>
                  setNewSimpson({ ...newSimpson, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie poster</Form.Label>
              <Form.Control
                placeholder="type movie poster url here"
                autoFocus
                value={newSimpson.imgUrl}
                onChange={(e) =>
                  setNewSimpson({ ...newSimpson, imgUrl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control
                placeholder="enter simpson rating"
                autoFocus
                type="number"
                value={newSimpson.rating}
                onChange={(e) =>
                  setNewSimpson({ ...newSimpson, rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
