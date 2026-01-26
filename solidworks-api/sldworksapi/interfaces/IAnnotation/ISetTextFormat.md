---
type: method
interface: IAnnotation
member: ISetTextFormat
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Number indicating which text within this annotation to check
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document default setting for text format, false to not
  -
    name: TextFormat
    type: TextFormat
    description: Object to use for the ITextFormat on the specified piece of text
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetTextFormat
  - IAnnotation.IGetTextFormat
  - IAnnotation.SetTextFormat
keywords:
  - isettextformat
  - iannotation
  - annotation
  - text
  - format
  - index
  - int32
  - use
  - doc
  - boolean
---

# IAnnotation.ISetTextFormat

Sets the text format information for the specified text within this annotation.

## Signature

```csharp
System.Boolean ISetTextFormat( 
   System.Int32
Index
,
   System.Boolean
UseDoc
,
   TextFormat
TextFormat
)
```
## Parameters

- `Index` (System.Int32): Number indicating which text within this annotation to check
- `UseDoc` (System.Boolean): True to use the document default setting for text format, false to not
- `TextFormat` (TextFormat): Object to use for the ITextFormat on the specified piece of text

## Return Value

True if this method is successful in setting the text format information, false if not

## Remarks

The behavior of this method differs depending on the type of annotation.
Datum Target
and
Datum Feature
Symbols
These symbols always use the document default setting for dimension text format to display all of the text objects within the symbol. This method has no effect on the annotation.
Geometric Tolerance
,
Display Dimensions
,
Simple Notes
,
Surface Finish
, and
Weld
Symbols
These symbols can use the document default setting for display of all text objects within the symbol (dimension text setting for the geometric tolerance symbols and display dimensions, or note text setting for notes) or they can use a local format. The index argument is not used and should be set to 0.
Blocks
(and compound notes in documents created in SOLIDWORKS 2015 and earlier)
These symbols might contain several different pieces of text; each piece can use the document default setting for notes or a local format. The index argument identifies the text. The index value is 0 based. If the index value is invalid, then this method returns false. To get the number of text or TextFormat objects, use
IAnnotation::GetTextFormatCount
.
Rich Text Format
If a notes contains embedded rich text information in the string, then using this method to set a specific text format has no effect and returns false. If you use this method to set the note to use the document default text format, then all of the rich text font information is removed from the string.
To set a specific text format for a note that contains embedded rich text information, perform these two steps. First use this method to set the document default. Then use this method to set the specific text format.
If the useDoc argument is True, then the annotation is set to use the appropriate document default setting and ignores the textFormat argument, which should be set to NULL. To determine whether or not this annotation is using the document default settings for text format, use
IAnnotation::GetUseDocTextFormat
. To set the text format information, use
IAnnotation::SetTextFormat
or
IAnnotation::ISetTextFormat
.
To see the effects of changing the text format information for this annotation, use
ModelDoc2::GraphicsRedraw2
.

## See Also

- `IAnnotation.GetTextFormat`
- `IAnnotation.IGetTextFormat`
- `IAnnotation.SetTextFormat`