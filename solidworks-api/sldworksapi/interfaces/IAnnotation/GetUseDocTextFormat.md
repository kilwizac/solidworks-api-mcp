---
type: method
interface: IAnnotation
member: GetUseDocTextFormat
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Number indicating which text within this annotation to check (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - getusedoctextformat
  - iannotation
  - annotation
  - use
  - doc
  - text
  - format
  - index
  - int32
  - boolean
---

# IAnnotation.GetUseDocTextFormat

Gets whether SOLIDWORKS is currently using the document default text format setting for this annotation.

## Signature

```csharp
System.Boolean GetUseDocTextFormat( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Number indicating which text within this annotation to check (see Remarks )

## Return Value

True if the setting is a document default setting, false if not

## Remarks

The behavior of this method differs slightly depending on the type of annotation.
Weld
,
Datum Target
,
Datum Feature
, and
Surface Finish
Symbols
These symbols always use the document default setting for dimension text format of the text objects within the symbol. Therefore, this method always returns True for these annotation types. The index argument is not used and should be set to 0.
Geometric Tolerance
Symbols,
Display Dimensions
, and
Simple Notes
These symbols can use the document default setting to display all of the text objects within the symbol (dimension text setting for the geometric tolerance symbols and display dimensions, or note text setting for notes), in which case this method returns True. They can also use a local format, in which case this method returns false. The index argument is not used and should be set to 0.
Blocks
(and compound notes created in SOLIDWORKS 2015 and earlier)
These symbols can contain several different pieces of text, each individually using the document default setting for notes or a local format. The index argument identifies the text. The index value is 0-based. If the index value is invalid, this method returns True. To get the number of text or text format objects, use
IAnnotation::GetTextFormatCount
.
To get the text format object for this annotation, use
IAnnotation::GetTextFormat
,
IAnnotation::IGetTextFormat
,
IAnnotation::SetTextFormat
, or
IAnnotation::ISetTextFormat
.