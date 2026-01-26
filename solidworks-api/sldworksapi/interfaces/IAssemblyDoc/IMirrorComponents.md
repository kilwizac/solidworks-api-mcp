---
type: method
interface: IAssemblyDoc
member: IMirrorComponents
returns: Component2
parameters:
  -
    name: Plane
    type: System.Object
    description: Plane or planar face about which to mirror the components
  -
    name: InstanceCount
    type: System.Int32
    description: Number of instances of the components to mirror
  -
    name: ComponentsToInstance
    type: Component2
    description: Array of instances of the component to mirror
  -
    name: MirrorCount
    type: System.Int32
    description: Number of components to mirror
  -
    name: ComponentsToMirror
    type: Component2
    description: Array of components to mirror
  -
    name: NameCount
    type: System.Int32
    description: Number of filenames for the newly created mirrored assemblies or parts
  -
    name: MirroredComponentFilenames
    type: System.String
    description: Array of filenames for the newly created mirrored assemblies or parts
  -
    name: RecreateMates
    type: System.Boolean
    description: True to preserve any mates between the selected components if more than one component is to be mirrored, false to not
  -
    name: ComponentModifier
    type: System.Int32
    description: Prefix or suffix for the newly mirrored components if MirroredComponentFilenames is not specified, as defined by swMirrorComponentNameModifier_e
  -
    name: ComponentNameModifier
    type: System.String
    description: String to add to the prefix or suffix of the name of the newly mirrored components if MirroredComponentFilenames is not specified
  -
    name: MirroredFileLocation
    type: System.String
    description: Name of the folder where to store the file of the newly created mirrored components
  -
    name: CopyCustomProperties
    type: System.Boolean
    description: True to copy the custom properties from the selected components to the mirrored components, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.MirrorComponents
keywords:
  - imirrorcomponents
  - iassemblydoc
  - assembly
  - doc
  - mirror
  - components
  - plane
  - object
  - instance
  - count
  - int32
  - component2
  - name
  - mirrored
  - component
  - filenames
  - string
  - recreate
  - mates
  - boolean
  - modifier
  - file
  - location
  - copy
  - custom
  - properties
---

# IAssemblyDoc.IMirrorComponents

Obsolete. Superseded by IAssemblyDoc::MirrorComponents2.

## Signature

```csharp
Component2 IMirrorComponents( 
   System.Object
Plane
,
   System.Int32
InstanceCount
,
   ref Component2
ComponentsToInstance
,
   System.Int32
MirrorCount
,
   ref Component2
ComponentsToMirror
,
   System.Int32
NameCount
,
   ref System.String
MirroredComponentFilenames
,
   System.Boolean
RecreateMates
,
   System.Int32
ComponentModifier
,
   System.String
ComponentNameModifier
,
   System.String
MirroredFileLocation
,
   System.Boolean
CopyCustomProperties
)
```
## Parameters

- `Plane` (System.Object): Plane or planar face about which to mirror the components
- `InstanceCount` (System.Int32): Number of instances of the components to mirror
- `ComponentsToInstance` (Component2): Array of instances of the component to mirror
- `MirrorCount` (System.Int32): Number of components to mirror
- `ComponentsToMirror` (Component2): Array of components to mirror
- `NameCount` (System.Int32): Number of filenames for the newly created mirrored assemblies or parts
- `MirroredComponentFilenames` (System.String): Array of filenames for the newly created mirrored assemblies or parts
- `RecreateMates` (System.Boolean): True to preserve any mates between the selected components if more than one component is to be mirrored, false to not
- `ComponentModifier` (System.Int32): Prefix or suffix for the newly mirrored components if MirroredComponentFilenames is not specified, as defined by swMirrorComponentNameModifier_e
- `ComponentNameModifier` (System.String): String to add to the prefix or suffix of the name of the newly mirrored components if MirroredComponentFilenames is not specified
- `MirroredFileLocation` (System.String): Name of the folder where to store the file of the newly created mirrored components
- `CopyCustomProperties` (System.Boolean): True to copy the custom properties from the selected components to the mirrored components, false to not

## Return Value

in-process, unmanaged C++: Pointer to an array of newly created components VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## See Also

- `IAssemblyDoc.MirrorComponents`