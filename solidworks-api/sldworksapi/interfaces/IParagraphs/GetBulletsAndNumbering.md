---
type: method
interface: IParagraphs
member: GetBulletsAndNumbering
returns: System.Boolean
parameters:
  -
    name: ParagraphType
    type: System.Int32
    description: List type as defined in swParagraphType_e
  -
    name: NumberingType
    type: System.Int32
    description: Numbering direction as defined in swNumberedListStartType_e ; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
  -
    name: StartAt
    type: System.Int32
    description: Letter or number starting this numbered list, depending on Type; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
  -
    name: Type
    type: System.Int32
    description: Numbered list type as defined in swNumberedListType_e ; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
  -
    name: Format
    type: System.Int32
    description: Numbered list format as defined in swNumberingFormat_e ; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IParagraphs.SetBulletsAndNumbering
keywords:
  - getbulletsandnumbering
  - iparagraphs
  - paragraphs
  - bullets
  - numbering
  - paragraph
  - type
  - int32
  - start
  - format
  - boolean
---

# IParagraphs.GetBulletsAndNumbering

Gets the list properties of the current paragraph.

## Signature

```csharp
System.Boolean GetBulletsAndNumbering( 
   out System.Int32
ParagraphType
,
   out System.Int32
NumberingType
,
   out System.Int32
StartAt
,
   out System.Int32
Type
,
   out System.Int32
Format
)
```
## Parameters

- `ParagraphType` (System.Int32): List type as defined in swParagraphType_e
- `NumberingType` (System.Int32): Numbering direction as defined in swNumberedListStartType_e ; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
- `StartAt` (System.Int32): Letter or number starting this numbered list, depending on Type; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
- `Type` (System.Int32): Numbered list type as defined in swNumberedListType_e ; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered
- `Format` (System.Int32): Numbered list format as defined in swNumberingFormat_e ; valid only if ParagraphType is swParagraphType_e.swParagraphNumbered

## Return Value

True if successful, false if not

## Remarks

Before calling this method, set the current paragraph using
IParagraphs::CurrentParagraph
.

## Examples

- IParagraphs (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IParagraphs)

## See Also

- `IParagraphs.SetBulletsAndNumbering`