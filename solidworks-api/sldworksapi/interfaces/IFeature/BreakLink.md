---
type: method
interface: IFeature
member: BreakLink
returns: System.Int32
parameters:
  -
    name: AllComponents
    type: System.Boolean
    description: True to break the link for all subcomponents within a top-level subassembly, false to not (see Remarks )
  -
    name: Silent
    type: System.Boolean
    description: True to suppress dialog windows, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IImport3DInterconnectData
keywords:
  - breaklink
  - ifeature
  - feature
  - break
  - link
  - all
  - components
  - boolean
  - silent
  - int32
  - iimport3dinterconnectdata
---

# IFeature.BreakLink

Breaks the link to third-party native CAD parts and assemblies.

## Signature

```csharp
System.Int32 BreakLink( 
   System.Boolean
AllComponents
,
   System.Boolean
Silent
)
```
## Parameters

- `AllComponents` (System.Boolean): True to break the link for all subcomponents within a top-level subassembly, false to not (see Remarks )
- `Silent` (System.Boolean): True to suppress dialog windows, false to not

## Return Value

Error codes as defined in sw3DInterconnectImportErrors_e

## Remarks

By default, breaking a link of an assembly component breaks the links of all instances of that component.
After you break a link, all references to the original CAD file are lost. You can no longer change the entities to transfer from the original file or update the SOLIDWORKS model with changes from the third-party authoring application.

## Examples

- IImport3DInterconnectData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IImport3DInterconnectData)

## See Also

- `IImport3DInterconnectData`