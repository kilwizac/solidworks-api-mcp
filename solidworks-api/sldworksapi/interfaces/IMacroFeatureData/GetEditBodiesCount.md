---
type: method
interface: IMacroFeatureData
member: GetEditBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.EditBodies
  - IMacroFeatureData.EnableMultiBodyConsume
  - IMacroFeatureData.ISetEditBodies
keywords:
  - geteditbodiescount
  - imacrofeaturedata
  - macro
  - feature
  - data
  - edit
  - bodies
  - count
  - int32
---

# IMacroFeatureData.GetEditBodiesCount

Gets the number of bodies to be modified by this macro feature.

## Signature

```csharp
System.Int32 GetEditBodiesCount()
```
## Parameters

None.

## Return Value

Number of bodies to be modified by this macro feature

## Remarks

Call this method before calling
IMacroFeatureData::IGetEditBodies
to size the array for that method.

## See Also

- `IMacroFeatureData.EditBodies`
- `IMacroFeatureData.EnableMultiBodyConsume`
- `IMacroFeatureData.ISetEditBodies`