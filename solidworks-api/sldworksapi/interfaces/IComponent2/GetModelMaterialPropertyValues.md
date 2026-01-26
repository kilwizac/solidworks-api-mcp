---
type: property
interface: IComponent2
member: GetModelMaterialPropertyValues
returns: System.Object
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetMaterialPropertyValues2
  - IComponent2.HasMaterialPropertyValues
  - IComponent2.IGetModelMaterialPropertyValues
keywords:
  - properties
  - components
  - getmodelmaterialpropertyvalues
  - icomponent2
  - component2
  - model
  - material
  - values
  - config
  - name
  - string
  - object
  - vba
  - vb
  - net
readonly: null
---

# IComponent2.GetModelMaterialPropertyValues

Gets the material properties of this lightweight component in the specified configuration.

## Signature

```csharp
System.Object GetModelMaterialPropertyValues( 
   System.String
ConfigName
)
```
## Parameters

- `ConfigName` (System.String): Name of configuration

## Return Value

An array of 9 doubles (see Remarks )

## Remarks

The contents of the returned array:
[
R, G, B, Ambient, Diffuse, Specularity, Shininess, Transparency, Emission
]
Valid values are between 0.0 and 1.0, inclusive. Multiply the R, G, and B values by 255 to obtain the red, green, and blue component values. Multiply the other values in the array by 100 to obtain percentages. If all values in the array are -1, then material property values were not assigned to this component, and the component has the same default properties as the user interface.

## Examples

- Get Model Material Property Values (VBA) (Get_Model_Material_Property_Values_Example_VB.htm)
- Get Model Material Property Values (VB.NET) (Get_Model_Material_Property_Values_Example_VBNET.htm)
- Get Model Material Property Values (C#) (Get_Model_Material_Property_Values_Example_CSharp.htm)

## See Also

- `IComponent2.GetMaterialPropertyValues2`
- `IComponent2.HasMaterialPropertyValues`
- `IComponent2.IGetModelMaterialPropertyValues`