---
type: method
interface: IFeature
member: SetImportedFeatureParameters
returns: System.Int32
parameters:
  -
    name: DataObj
    type: System.Object
    description: IImport3DInterconnectData
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - setimportedfeatureparameters
  - ifeature
  - feature
  - imported
  - parameters
  - data
  - obj
  - object
  - int32
  - iimport3dinterconnectdata
---

# IFeature.SetImportedFeatureParameters

Sets the data object for this 3D Interconnect part or assembly.

## Signature

```csharp
System.Int32 SetImportedFeatureParameters( 
   System.Object
DataObj
)
```
## Parameters

- `DataObj` (System.Object): IImport3DInterconnectData

## Return Value

Error codes as defined in sw3DInterconnectImportErrors_e

## Remarks

Before calling this method, use
IFeature::Is3DInterconnectFeature
to ensure that this is a 3D Interconnect feature.

## Examples

- IImport3DInterconnectData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IImport3DInterconnectData)