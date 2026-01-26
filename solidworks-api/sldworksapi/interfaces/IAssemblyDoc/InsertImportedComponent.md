---
type: method
interface: IAssemblyDoc
member: InsertImportedComponent
returns: System.Int32
parameters:
  -
    name: FileName
    type: System.String
    description: Full path name of the third-party native CAD file to insert
  -
    name: X
    type: System.Double
    description: X-coordinate of the component center
  -
    name: Y
    type: System.Double
    description: Y-coordinate of the component center
  -
    name: Z
    type: System.Double
    description: Z-coordinate of the component center
  -
    name: CompInserted
    type: System.Object
    description: IComponent2 ; null or Nothing if unsuccessful
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - file-io
  - ui
related:
  - IPartDoc.InsertImportedFeature
  - ISldWorks.LoadFile4
keywords:
  - insertimportedcomponent
  - iassemblydoc
  - assembly
  - doc
  - insert
  - imported
  - component
  - file
  - name
  - string
  - double
  - comp
  - inserted
  - object
  - int32
---

# IAssemblyDoc.InsertImportedComponent

Inserts a third-party native CAD part or assembly into the current configuration of this assembly.

## Signature

```csharp
System.Int32 InsertImportedComponent( 
   System.String
FileName
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   out System.Object
CompInserted
)
```
## Parameters

- `FileName` (System.String): Full path name of the third-party native CAD file to insert
- `X` (System.Double): X-coordinate of the component center
- `Y` (System.Double): Y-coordinate of the component center
- `Z` (System.Double): Z-coordinate of the component center
- `CompInserted` (System.Object): IComponent2 ; null or Nothing if unsuccessful

## Return Value

Error code as defined in sw3DInterconnectImportErrors_e

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
To edit the imported assembly, save the SOLIDWORKS assembly and then use
IFeature::GetImportedFeatureParameters
and
IFeature::SetImportedFeatureParameters
.
See the
IImport3DInterconnectData
Remarks.
If 3D Interconnect is turned off, use
IAssemblyDoc::AddComponent5
instead of this method.

## See Also

- `IPartDoc.InsertImportedFeature`
- `ISldWorks.LoadFile4`