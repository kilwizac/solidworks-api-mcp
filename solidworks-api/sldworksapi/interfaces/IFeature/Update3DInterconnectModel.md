---
type: method
interface: IFeature
member: Update3DInterconnectModel
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IImport3DInterconnectData
keywords:
  - update3dinterconnectmodel
  - ifeature
  - feature
  - update3
  - interconnect
  - model
  - boolean
  - iimport3dinterconnectdata
---

# IFeature.Update3DInterconnectModel

Updates the model for this 3D Interconnect part or assembly.

## Signature

```csharp
System.Boolean Update3DInterconnectModel()
```
## Parameters

None.

## Return Value

True if model updated successfully, false if not

## Remarks

Before calling this method, use
IFeature::Is3DInterconnectUpdateAvailable
to determine whether an update is available.

## Examples

- IImport3DInterconnectData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IImport3DInterconnectData)

## See Also

- `IImport3DInterconnectData`