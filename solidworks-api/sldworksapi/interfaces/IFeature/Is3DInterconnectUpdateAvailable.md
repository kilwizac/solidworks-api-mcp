---
type: property
interface: IFeature
member: Is3DInterconnectUpdateAvailable
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
  - is3dinterconnectupdateavailable
  - ifeature
  - feature
  - is3
  - interconnect
  - update
  - available
  - boolean
  - iimport3dinterconnectdata
readonly: true
---

# IFeature.Is3DInterconnectUpdateAvailable

Gets whether an update is available for this 3D Interconnect part or assembly.

## Signature

```csharp
System.Boolean Is3DInterconnectUpdateAvailable {get;}
```
## Parameters

None.

## Return Value

True if an update is available, false if not

## Remarks

If this property is true, use
IFeature::Update3DInterconnectModel
to update the imported feature or component.

## Examples

- IImport3DInterconnectData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IImport3DInterconnectData)

## See Also

- `IImport3DInterconnectData`