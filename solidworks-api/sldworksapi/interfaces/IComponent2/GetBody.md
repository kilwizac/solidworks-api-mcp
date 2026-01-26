---
type: method
interface: IComponent2
member: GetBody
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - geometry
related:
  - IComponent2.EnumBodies2
  - IComponent2.GetBodies3
  - IComponent2.IGetBody
keywords:
  - getbody
  - icomponent2
  - component2
  - body
  - object
  - combine
  - assembly
  - components
  - part
  - vba
  - mass
  - properties
  - component
  - material
  - select
  - face
  - name
  - display
  - temporary
  - vb
  - net
---

# IComponent2.GetBody

Gets the body that belongs to this instance of this component.

## Signature

```csharp
System.Object GetBody()
```
## Parameters

None.

## Return Value

Body

## Remarks

This method returns a valid IBody2 object only for fully resolved components that reference an
IPartDoc
. For the root component, lightweight components or components that reference an AssemblyDoc, this method returns a NULL body object. However, if a component is in a multibody part, then this method returns the first body.
For COM applications, this method returns the status code ITF_E_COMPONENTNOTRESOLVED.
This method is different from the IPartDoc::Body method in that it recognizes assembly-level features and returns that information based on the component instance. IPartDoc::Body never recognizes assembly-level features because the feature information is kept with the assembly, not propagated down to the part file.
For example, if PartABC is added to an assembly twice, then changes to that IPartDoc object would affect both instances of the assembly IComponent2. Likewise, querying information from that IPartDoc object will not recognize changes in the assembly that may have altered only one of the components (for example, an assembly-level feature was added to one of the components). However, the component object recognizes the two instances of PartABC as two distinct IComponent2 objects and returns its information from the assembly level.
For example, one assembly configuration might have an assembly-level feature that cuts a hole through each of the components in the assembly. Using this method on each of the assembly components returns the body of each component with the hole feature that was applied in this particular configuration. If you switch to the configuration
without the assembly-level hole and re-traverse the IComponent2 objects, then calling this method for each component returns the IBody2 object without the hole feature because it was applied in the other configuration.
For more information on lightweight components, see
IComponent2::GetSuppression
,
IComponent2::SetSuppression2
, and
IAssemblyDoc::ResolveAllLightWeightComponents
.

## Examples

- Combine Assembly Components into Part (VBA) (Combine_Assembly_Components_into_Part_Example_VB.htm)
- Get Mass Properties of Assembly Component (VBA) (Get_Mass_Properties_of_Assembly_Component_Example_VB.htm)
- Get Material Properties (VBA) (Get_Material_Properties_Example_VB.htm)
- Select Component Face By Name (VBA) (Get_Component_Face_By_Name_Example_VB.htm)
- Display Temporary Body (C#) (Display_Temporary_Body_Example_CSharp.htm)
- Display Temporary Body (VB.NET) (Display_Temporary_Body_Example_VBNET.htm)
- Display Temporary Body (VBA) (Display_Temporary_Body_Example_VB.htm)

## See Also

- `IComponent2.EnumBodies2`
- `IComponent2.GetBodies3`
- `IComponent2.IGetBody`