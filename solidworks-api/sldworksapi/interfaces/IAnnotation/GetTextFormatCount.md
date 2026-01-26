---
type: method
interface: IAnnotation
member: GetTextFormatCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetTextFormat
  - IAnnotation.GetUseDocTextFormat
  - IAnnotation.IGetTextFormat
  - IAnnotation.ISetTextFormat
  - IAnnotation.SetTextFormat
keywords:
  - gettextformatcount
  - iannotation
  - annotation
  - text
  - format
  - count
  - int32
---

# IAnnotation.GetTextFormatCount

Gets the number of text formats for this annotation.

## Signature

```csharp
System.Int32 GetTextFormatCount()
```
## Parameters

None.

## Return Value

Number of text formats

## Remarks

The value returned by this method is intended to be used with
IAnnotation::GetUseDocTextFormat
,
IAnnotation::GetTextFormat
,
IAnnotation::IGetTextFormat
,
IAnnotation::SetTextFormat
, and
IAnnotation::ISetTextFormat
. The index input argument for these methods must be less than the number returned by this method.
This value is not necessarily the same as the number of text objects within a symbol. For example, there are multiple text objects in a geometric tolerance symbol, but they all share the same text format so SOLIDWORKS returns 1. In fact, for all of the annotations except blocks (and compound notes in documents created in SOLIDWORKS 2015 and earlier), this method should return 1. For blocks and compound notes, each piece of text within the symbol has its own text format, so the return value should match the number of TextFormat objects.

## See Also

- `IAnnotation.GetTextFormat`
- `IAnnotation.GetUseDocTextFormat`
- `IAnnotation.IGetTextFormat`
- `IAnnotation.ISetTextFormat`
- `IAnnotation.SetTextFormat`