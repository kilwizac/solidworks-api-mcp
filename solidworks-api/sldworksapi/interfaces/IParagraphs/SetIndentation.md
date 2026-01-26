---
type: method
interface: IParagraphs
member: SetIndentation
returns: System.Boolean
parameters:
  -
    name: FirstlineIndent
    type: System.Double
    description: Indentation of first line
  -
    name: Indent
    type: System.Double
    description: Indentation of lines other than the first line
  -
    name: IndentIncrement
    type: System.Double
    description: Amount by which to increment the current indents
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.GetIndentation
keywords:
  - setindentation
  - iparagraphs
  - paragraphs
  - indentation
  - firstline
  - indent
  - double
  - increment
  - boolean
---

# IParagraphs.SetIndentation

Sets the indentation of the current paragraph.

## Signature

```csharp
System.Boolean SetIndentation( 
   System.Double
FirstlineIndent
,
   System.Double
Indent
,
   System.Double
IndentIncrement
)
```
## Parameters

- `FirstlineIndent` (System.Double): Indentation of first line
- `Indent` (System.Double): Indentation of lines other than the first line
- `IndentIncrement` (System.Double): Amount by which to increment the current indents

## Return Value

True if successful, false if not

## Remarks

Before calling this method, set the current paragraph using
IParagraphs::CurrentParagraph
.
After calling this method, call
IParagraphs::UpdateParagraph
to update the model.

## See Also

- `IParagraphs.GetIndentation`