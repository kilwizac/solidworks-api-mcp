---
type: method
interface: IRefPlaneFeatureData
member: GetSelectionsCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - IRefPlaneFeatureData.ISetSelections
  - IRefPlaneFeatureData.Selections
keywords:
  - getselectionscount
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - selections
  - count
  - int32
---

# IRefPlaneFeatureData.GetSelectionsCount

Gets the number of entities selected to create this reference plane feature.

## Signature

```csharp
System.Int32 GetSelectionsCount()
```
## Parameters

None.

## Return Value

Number of entities selected to create this reference plane feature

## Remarks

Call this method before calling
IRefPlaneFeatureData::IGetSelections
.
IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.ISetSelections`
- `IRefPlaneFeatureData.Selections`