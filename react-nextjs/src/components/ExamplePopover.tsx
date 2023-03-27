import Anchor from "react-bootstrap/Anchor";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const ExamplePopover: React.FC = () => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={
        <Popover>
          <Popover.Header as="h3">Custom popover</Popover.Header>
          <Popover.Body>This is a Bootstrap popover.</Popover.Body>
        </Popover>
      }
    >
      <Anchor className="text-success">Example popover</Anchor>
    </OverlayTrigger>
  );
};

export default ExamplePopover;
