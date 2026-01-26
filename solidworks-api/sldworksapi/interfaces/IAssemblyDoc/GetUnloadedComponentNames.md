---
type: method
interface: IAssemblyDoc
member: GetUnloadedComponentNames
returns: System.Object
parameters:
  -
    name: UnloadedComponentPathNames
    type: System.Object
    description: Array of the paths of the unloaded components
  -
    name: UnloadedComponentReferencedConfigurationNames
    type: System.Object
    description: Array of the referenced configuration names of the unloaded components
  -
    name: ReasonForUnloadingComponents
    type: System.Object
    description: Array indicating the reason each component is unloaded as defined by swComponentLoadStatus_e
  -
    name: DocTypes
    type: System.Object
    description: Array of document types as defined in swDocumentTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IComponent2.GetHiddenUnloadedChildrenCount
  - IComponent2.GetUnloadedComponentNames
  - IComponent2.HasUnloadedComponents
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - components
  - hidden
  - icomponent2
  - unloaded
  - suppressed
  - name
  - names
  - getunloadedcomponentnames
  - assembly
  - doc
  - component
  - path
  - object
  - referenced
  - configuration
  - reason
  - unloading
  - types
  - filenames
  - vb
  - net
  - vba
---

# IAssemblyDoc.GetUnloadedComponentNames

Gets the unloaded components' paths, referenced configuration names, reasons why they are unloaded, document types, and names.

## Signature

```csharp
System.Object GetUnloadedComponentNames( 
   out System.Object
UnloadedComponentPathNames
,
   out System.Object
UnloadedComponentReferencedConfigurationNames
,
   out System.Object
ReasonForUnloadingComponents
,
   out System.Object
DocTypes
)
```
## Parameters

- `UnloadedComponentPathNames` (System.Object): Array of the paths of the unloaded components
- `UnloadedComponentReferencedConfigurationNames` (System.Object): Array of the referenced configuration names of the unloaded components
- `ReasonForUnloadingComponents` (System.Object): Array indicating the reason each component is unloaded as defined by swComponentLoadStatus_e
- `DocTypes` (System.Object): Array of document types as defined in swDocumentTypes_e

## Return Value

Array of the names of the unloaded components

## Remarks

This method is useful when the assembly document was opened with
Quick View/Selective open
or
Do not load hidden components
.
To get whether an assembly has hidden or suppressed unloaded components, call
IAssemblyDoc::HasUnloadedComponents
.

## Examples

- Get Hidden Components Filenames (C#) (Get_Hidden_Components_Filenames_Example_CSharp.htm)
- Get Hidden Components Filenames (VB.NET) (Get_Hidden_Components_Filenames_Example_VBNET.htm)
- Get Hidden Components Filenames (VBA) (Get_Hidden_Components_Filenames_Example_VB.htm)

## See Also

- `IComponent2.GetHiddenUnloadedChildrenCount`
- `IComponent2.GetUnloadedComponentNames`
- `IComponent2.HasUnloadedComponents`