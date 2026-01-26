---
type: method
interface: IDimension
member: GetReferencePointsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related:
  - IDimension.ISetReferencePoints
  - IDimension.ReferencePoints
keywords:
  - getreferencepointscount
  - idimension
  - dimension
  - reference
  - points
  - count
  - int32
---

# IDimension.GetReferencePointsCount

Gets the number of reference points for this dimension.

## Signature

```csharp
System.Int32 GetReferencePointsCount()
```
## Parameters

None.

## Return Value

Number of dimension reference points

## Remarks

Call this method before calling
IDimension::IGetReferencePoints
.

## See Also

- `IDimension.ISetReferencePoints`
- `IDimension.ReferencePoints`