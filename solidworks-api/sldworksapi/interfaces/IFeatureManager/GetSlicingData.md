---
type: method
interface: IFeatureManager
member: GetSlicingData
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertSlicing
keywords:
  - getslicingdata
  - ifeaturemanager
  - feature
  - manager
  - slicing
  - data
  - object
  - islicingdata
---

# IFeatureManager.GetSlicingData

Gets a new slicing data object with default parameter values.

## Signature

```csharp
System.Object GetSlicingData()
```
## Parameters

None.

## Return Value

ISlicingData

## Remarks

Before calling this method to access default slicing parameters, you must pre-select the first reference entity/entities for slicing.

## Examples

- ISlicingData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlicingData)

## See Also

- `IFeatureManager.InsertSlicing`