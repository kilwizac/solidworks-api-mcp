---
type: method
interface: IBomFeature
member: GetTableAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - drawings
  - features
related:
  - IBomFeature.GetTableAnnotations
keywords:
  - gettableannotationcount
  - ibomfeature
  - bom
  - feature
  - table
  - annotation
  - count
  - int32
---

# IBomFeature.GetTableAnnotationCount

Gets the number of BOM table annotations for this BOM table feature.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of BOM table annotations for this BOM table feature

## Remarks

Call this method before calling
IBomFeature::IGetTableAnnotations
.

## See Also

- `IBomFeature.GetTableAnnotations`