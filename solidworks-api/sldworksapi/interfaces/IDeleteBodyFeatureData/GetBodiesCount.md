---
type: method
interface: IDeleteBodyFeatureData
member: GetBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteBodyFeatureData.Bodies
  - IDeleteBodyFeatureData.ISetBodies
keywords:
  - getbodiescount
  - ideletebodyfeaturedata
  - delete
  - body
  - feature
  - data
  - bodies
  - count
  - int32
---

# IDeleteBodyFeatureData.GetBodiesCount

Gets the number of bodies to delete or keep.

## Signature

```csharp
System.Int32 GetBodiesCount()
```
## Parameters

None.

## Return Value

Number of bodies

## Remarks

Call this method before calling
IDeleteBodyFeautre::IGetBodies
to determine the size of the array.

## Examples

- IDeleteBodyFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IDeleteBodyFeatureData)

## See Also

- `IDeleteBodyFeatureData.Bodies`
- `IDeleteBodyFeatureData.ISetBodies`