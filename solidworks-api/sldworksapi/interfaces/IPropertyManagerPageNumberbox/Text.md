---
type: property
interface: IPropertyManagerPageNumberbox
member: Text
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - text
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - string
readonly: true
---

# IPropertyManagerPageNumberbox.Text

Gets the text that appears in the number box.

## Signature

```csharp
System.String Text {get;}
```
## Parameters

None.

## Return Value

Text in number box

## Remarks

If a user changes the value in an number box by typing in a new value, the
IPropertyManagerPage2Handler5::OnTextboxChanged
is called with the current text string and the ID of the number box. You can then use IPropertyManagerPageNumberbox::Text to show the text elsewhere, such as in a callout.