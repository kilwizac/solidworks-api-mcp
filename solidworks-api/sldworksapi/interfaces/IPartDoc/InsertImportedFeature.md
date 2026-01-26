---
type: method
interface: IPartDoc
member: InsertImportedFeature
returns: System.Object
parameters:
  -
    name: FileName
    type: System.String
    description: Full path name of the third-party native CAD file to insert
  -
    name: Errors
    type: System.Int32
    description: Error code as defined in swFileLoadError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - features
  - file-io
  - parts
  - ui
related:
  - IAssemblyDoc.InsertImportedComponent
  - ISldWorks.LoadFile4
keywords:
  - insertimportedfeature
  - ipartdoc
  - part
  - doc
  - insert
  - imported
  - feature
  - file
  - name
  - string
  - errors
  - int32
  - object
---

# IPartDoc.InsertImportedFeature

Inserts a third-party native CAD file into this part.

## Signature

```csharp
System.Object InsertImportedFeature( 
   System.String
FileName
,
   out System.Int32
Errors
)
```
## Parameters

- `FileName` (System.String): Full path name of the third-party native CAD file to insert
- `Errors` (System.Int32): Error code as defined in swFileLoadError_e

## Return Value

IFeature if successful; null or Nothing otherwise

## Remarks

To successfully use this method, you must first turn on 3D Interconnect by either:
Setting
Tools > Options > System Options > Import > Enable 3D Interconnect
- or -
Calling
ISldWorks::SetUserPreferenceToggle
(
swUserPreferenceToggle_e
.swMultiCAD_Enable3DInterconnect, True)
The feature is imported and positioned relative to the origin using coordinates of the imported file. To edit the feature, use
IFeature::GetImportedFeatureParameters
and
IFeature::SetImportedFeatureParameters
.
See the
IImport3DInterconnectData
Remarks.

## See Also

- `IAssemblyDoc.InsertImportedComponent`
- `ISldWorks.LoadFile4`