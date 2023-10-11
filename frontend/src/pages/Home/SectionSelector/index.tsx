import Form from "react-bootstrap/Form";

import { NewsSection } from "@common/enums";

interface NewsSectionSelectProps {
  section: NewsSection;
  onChange: (value: NewsSection) => void;
}

const SectionSelector: React.FC<NewsSectionSelectProps> = ({
  section,
  onChange,
}: NewsSectionSelectProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    onChange(value as NewsSection);
  };

  return (
    <Form.Select value={section} onChange={handleChange}>
      {Object.keys(NewsSection).map((value) => (
        <option key={value} value={NewsSection[value]}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
};

export default SectionSelector;
