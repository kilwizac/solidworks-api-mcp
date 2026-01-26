---
type: method
interface: ITableAnnotation
member: SetTextFormat
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the document setting, false to not
  -
    name: TextFormat
    type: TextFormat
    description: ITextFormat object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - ITableAnnotation.GetTextFormat
  - ITableAnnotation.GetUseDocTextFormat
  - ITableAnnotation.Text
  - ITableAnnotation.TextHorizontalJustification
  - ITableAnnotation.TextVerticalJustification
keywords:
  - table
  - text
  - settextformat
  - itableannotation
  - annotation
  - format
  - use
  - doc
  - boolean
---

# ITableAnnotation.SetTextFormat

Sets the text format for this table.

## Signature

```csharp
System.Boolean SetTextFormat( 
   System.Boolean
UseDoc
,
   TextFormat
TextFormat
)
```
## Parameters

- `UseDoc` (System.Boolean): True to use the document setting, false to not
- `TextFormat` (TextFormat): ITextFormat object

## Return Value

True if the text format is set successfully, false if not

## See Also

- `ITableAnnotation.GetTextFormat`
- `ITableAnnotation.GetUseDocTextFormat`
- `ITableAnnotation.Text`
- `ITableAnnotation.TextHorizontalJustification`
- `ITableAnnotation.TextVerticalJustification`