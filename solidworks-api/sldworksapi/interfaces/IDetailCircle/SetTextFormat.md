---
type: method
interface: IDetailCircle
member: SetTextFormat
returns: System.Boolean
parameters:
  -
    name: UseDoc
    type: System.Boolean
    description: True to use the local document text format, false to use the text format specified by TextFormat
  -
    name: TextFormat
    type: TextFormat
    description: Text format to use if UseDoc is false
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related:
  - IDetailCircle.GetTextFormat
  - IDetailCircle.GetUseDocTextFormat
keywords:
  - settextformat
  - idetailcircle
  - detail
  - circle
  - text
  - format
  - use
  - doc
  - boolean
---

# IDetailCircle.SetTextFormat

Sets the text format for this detail circle.

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

- `UseDoc` (System.Boolean): True to use the local document text format, false to use the text format specified by TextFormat
- `TextFormat` (TextFormat): Text format to use if UseDoc is false

## Return Value

True if the format was set successfully, false if it was not

## See Also

- `IDetailCircle.GetTextFormat`
- `IDetailCircle.GetUseDocTextFormat`