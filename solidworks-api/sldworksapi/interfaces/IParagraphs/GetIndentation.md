---
type: method
interface: IParagraphs
member: GetIndentation
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
  - IParagraphs.SetIndentation
keywords:
  - getindentation
  - iparagraphs
  - paragraphs
  - indentation
  - firstline
  - indent
  - double
  - increment
  - boolean
---

# IParagraphs.GetIndentation

Gets the indentation of the current paragraph.

## Signature

```csharp
System.Boolean GetIndentation( 
   out System.Double
FirstlineIndent
,
   out System.Double
Indent
,
   out System.Double
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

## See Also

- `IParagraphs.SetIndentation`