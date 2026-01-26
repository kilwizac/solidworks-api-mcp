---
type: method
interface: IComponent2
member: GetModelDoc2
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.IsRoot
keywords:
  - getmodeldoc2
  - icomponent2
  - component2
  - model
  - doc2
  - object
  - selected
  - objects
  - types
  - assembly
  - vba
  - insert
  - midsurface
  - component
  - vb
  - net
---

# IComponent2.GetModelDoc2

Gets the model document for this component.

## Signature

```csharp
System.Object GetModelDoc2()
```
## Parameters

None.

## Return Value

Model document

## Remarks

This method might return Nothing or null if:
a component is suppressed or lightweight.
the component ID is not loaded into memory by SOLIDWORKS.
For more information on lightweight components, see
Work With Lightweight Components
.
When you use the IModelDoc2 object of a component, you do not have access to whatever uniqueness might exist for this instance of the assembly IComponent2. This occurs because the IModelDoc2 object goes back to the saved part file. By comparison, the IComponent2 object gathers information at the assembly level. This allows IComponent2 objects to recognize assembly-level changes made to a component instance (for example, assembly-level features and material changes).
In addition, the IModelDoc2 object returned from this method represents the last-saved state. If the component part is currently open, then the IModelDoc2 object represents the state of the opened document. For example, if the component part is not open and it was last saved in the default configuration, then IComponent2::GetModelDoc2
returns a IModelDoc2 pointer representing that state. To get access to other configuration information (such as features and configuration properties), you must activate the part and show the desired configuration using
IModelDoc2::ShowConfiguration2
.
Unlike the previous version of this method (
IConfiguration::GetRootComponent
), this version of this method can handle the root component of an assembly.

## Examples

- Get Selected Objects and types in Assembly (VBA) (Get_Selected_Objects_and_Types_in_Assembly_Example_VB.htm)
- Insert MidSurface in Component (C#) (Insert_MidSurface_in_Component_Example_CSharp.htm)
- Insert MidSurface in Component (VB.NET) (Insert_MidSurface_in_Component_Example_VBNET.htm)
- Insert MidSurface in Component (VBA) (Insert_MidSurface_in_Component_Example_VB.htm)

## See Also

- `IComponent2.IsRoot`