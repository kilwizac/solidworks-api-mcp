---
type: property
interface: IComponent2
member: ComponentReference
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - reference
  - componentreference
  - component2
  - component
  - string
  - name
  - selected
  - entity
  - vb
  - net
  - vba
readonly: null
---

# IComponent2.ComponentReference

Gets or sets a component reference for this component.

## Signature

```csharp
System.String ComponentReference {get; set;}
```
## Parameters

None.

## Return Value

Component reference string

## Remarks

Call
IModelDoc2::ForceRebuild3
after setting a component reference.
To remove a component reference, set the component reference string to "".

## Examples

- Get Component Name from Selected Entity (VB.NET) (Get_Component_Name_From_Selected_Entity_Example_VBNET.htm)
- Get Component Name from Selected Entity (VBA) (Get_Component_Name_From_Selected_Entity_Example_VB.htm)
- Get Component Name from Selected Entity (C#) (Get_Component_Name_From_Selected_Entity_Example_CSharp.htm)