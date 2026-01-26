---
type: method
interface: IComponent2
member: GetUnloadedComponentNames
returns: System.Object
parameters:
  -
    name: UnloadedComponentPathNames
    type: System.Object
    description: Array of children components' path names
  -
    name: UnloadedComponentReferencedConfigurationNames
    type: System.Object
    description: Array of children components' referenced configuration names
  -
    name: ReasonForUnloadingComponents
    type: System.Object
    description: Array indicating the reason each child component is unloaded as defined by swComponentLoadStatus_e
  -
    name: DocTypes
    type: System.Object
    description: Array of document types as defined in swDocumentTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.GetUnloadedComponentNames
  - IAssemblyDoc.HasUnloadedComponents
  - IComponent2.GetHiddenUnloadedChildrenCount
  - IComponent2.HasUnloadedComponents
keywords:
  - hidden
  - components
  - unloaded
  - see
  - also
  - icomponent2
  - suppressed
  - getunloadedcomponentnames
  - component2
  - component
  - names
  - path
  - object
  - referenced
  - configuration
  - reason
  - unloading
  - doc
  - types
---

# IComponent2.GetUnloadedComponentNames

Gets the component's unloaded children components' path names, referenced configuration names, reasons why they are unloaded, document types, and names.

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

- `UnloadedComponentPathNames` (System.Object): Array of children components' path names
- `UnloadedComponentReferencedConfigurationNames` (System.Object): Array of children components' referenced configuration names
- `ReasonForUnloadingComponents` (System.Object): Array indicating the reason each child component is unloaded as defined by swComponentLoadStatus_e
- `DocTypes` (System.Object): Array of document types as defined in swDocumentTypes_e

## Return Value

Array of children components' names

## Remarks

This method is useful when the assembly document was opened with
Quick View/Selective open
.
To get whether a component has hidden or suppressed children components, call
IComponent2::HasUnloadedComponents
.

## See Also

- `IAssemblyDoc.GetUnloadedComponentNames`
- `IAssemblyDoc.HasUnloadedComponents`
- `IComponent2.GetHiddenUnloadedChildrenCount`
- `IComponent2.HasUnloadedComponents`