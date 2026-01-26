---
type: method
interface: IWeldmentCutListFeature
member: GetTableAnnotationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - IWeldmentCutListFeature.GetTableAnnotations
keywords:
  - gettableannotationcount
  - iweldmentcutlistfeature
  - weldment
  - cut
  - list
  - feature
  - table
  - annotation
  - count
  - int32
---

# IWeldmentCutListFeature.GetTableAnnotationCount

Gets the number of weldment cut list annotations for this weldment cut list table.

## Signature

```csharp
System.Int32 GetTableAnnotationCount()
```
## Parameters

None.

## Return Value

Number of weldment cut list annotations for this weldment cut list table

## Remarks

Call this method before calling
IWeldmentCutListFeature::IGetTableAnnotations
to get the size of the array for that method.

## See Also

- `IWeldmentCutListFeature.GetTableAnnotations`