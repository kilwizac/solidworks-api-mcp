---
type: method
interface: IAnnotation
member: IGetTextFormat
returns: TextFormat
parameters:
  -
    name: Index
    type: System.Int32
    description: Number indicating which text within this annotation to check
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetTextFormat
  - IAnnotation.GetTextFormatCount
  - IAnnotation.ISetTextFormat
  - ITextFormat
keywords:
  - igettextformat
  - iannotation
  - annotation
  - text
  - format
  - index
  - int32
---

# IAnnotation.IGetTextFormat

Gets the text format for the specified text in this annotation.

## Signature

```csharp
TextFormat IGetTextFormat( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Number indicating which text within this annotation to check

## Return Value

Pointer to ITextFormat of the specified piece of text

## Remarks

The behavior of this method differs depending on the type of annotation.
Datum Target
and
Datum Feature Symbols
These symbols always use the document default setting for dimension text format to
display text within the symbol. The index argument is not used and should be set
to 0.
Geometric Tolerance
,
Display Dimensions
,
Simple Notes
,
Surface Finish
, and
Weld Symbols
These symbols can either use the document default setting to display text within
the symbol (dimension text setting for the geometric tolerance symbols and display
dimensions, or note text setting for notes) or they can use a local format. The index
argument is not used and should be set to 0.
Blocks
(and compound notes in documents created in SOLIDWORKS 2015 and earlier)
These symbols might contain several different pieces of text; each piece can use
the document default setting for notes or a local format. The index argument identifies
the text. The index value is 0-based. If the index value is invalid, then this method
returns a NULL pointer. To get the number of text or
ITextFormat
objects, use
IAnnotation::GetTextFormatCount
.
Rich Text Format
If a note contains embedded rich text information in the string, this method returns
a text format that does not necessarily reflect what is displayed on the screen for
that note. Use
INote::HasMultipleFonts
to determine if the note contains embedded
rich text information.
ITextFormat is returned if it is for a local setting or for the document
default setting. To determine whether or not this annotation is using the document
default settings for text format, use
IAnnotation::GetUseDocTextFormat
. To set the
text format information, use
IAnnotation::SetTextFormat
.

## See Also

- `IAnnotation.GetTextFormat`
- `IAnnotation.GetTextFormatCount`
- `IAnnotation.ISetTextFormat`
- `ITextFormat`