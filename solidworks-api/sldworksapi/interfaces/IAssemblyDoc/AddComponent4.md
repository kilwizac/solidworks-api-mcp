---
type: method
interface: IAssemblyDoc
member: AddComponent4
returns: Component2
parameters:
  -
    name: CompName
    type: System.String
    description: Path name of a loaded part or assembly to add as a component (see Remarks )
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration from which to load the component (see Remarks )
  -
    name: X
    type: System.Double
    description: X coordinate of the component center
  -
    name: Y
    type: System.Double
    description: Y coordinate of the component center
  -
    name: Z
    type: System.Double
    description: Z coordinate of the component center
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.InsertEnvelope
  - IAssemblyDoc.ReplaceComponents
keywords:
  - addcomponent4
  - iassemblydoc
  - assembly
  - doc
  - add
  - component4
  - comp
  - name
  - string
  - config
  - double
  - component2
  - component
  - mate
---

# IAssemblyDoc.AddComponent4

Obsolete. Superseded by IAssemblyDoc::AddComponent5.

## Signature

```csharp
Component2 AddComponent4( 
   System.String
CompName
,
   System.String
ConfigName
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `CompName` (System.String): Path name of a loaded part or assembly to add as a component (see Remarks )
- `ConfigName` (System.String): Name of the configuration from which to load the component (see Remarks )
- `X` (System.Double): X coordinate of the component center
- `Y` (System.Double): Y coordinate of the component center
- `Z` (System.Double): Z coordinate of the component center

## Return Value

IComponent2

## Remarks

The specified file must be loaded in memory. A file is loaded into memory when you load the file in your SOLIDWORKS Design session (
ISldWorks::OpenDoc6
) or open an assembly that already contains the file.
If configName is empty or specifies a configuration that does not exist, then the current configuration
is used.
If you want to add the component at a position relative to the root component, use
IComponent2::Transform2
to reposition the component immediately after calling this method. Or, you can use
IAssemblyDoc::AddComponents
or
IAssemblyDoc::AddComponents2
to specify the transform when inserting a component, insert as many components as you want at once, and rotate and scale the component through the transform matrix.
IMPORTANT:
The x, y, and z parameters of this method are relative to the bounding box of the component. Only use this method if you want to approximately position the component. Use IComponent2::Transform2 if you want to more precisely position the component.

## Examples

- Add Component and Mate (C++) (Add_Component_and_Mate_Example_CPlusPlus_COM.htm)

## See Also

- `IAssemblyDoc.InsertEnvelope`
- `IAssemblyDoc.ReplaceComponents`