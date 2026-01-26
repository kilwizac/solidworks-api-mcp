---
type: method
interface: IModelDoc2
member: Parameter
returns: System.Object
parameters:
  -
    name: StringIn
    type: System.String
    description: Name of parameter (for example, "D1@Base-Revolve")
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.IParameter
  - IModelDoc2.SetParamValue
keywords:
  - parameters
  - see
  - also
  - iparameter
  - dimension
  - idimension
  - parameter
  - imodeldoc2
  - model
  - doc2
  - string
  - object
  - change
  - vba
  - depth
  - extrusion
  - modify
  - plane
  - changing
  - value
  - recalculate
  - bounding
  - box
  - vb
  - net
---

# IModelDoc2.Parameter

Gets the specified parameter.

## Signature

```csharp
System.Object Parameter( 
   System.String
StringIn
)
```
## Parameters

- `StringIn` (System.String): Name of parameter (for example, "D1@Base-Revolve")

## Return Value

Parameter (see Remarks )

## Remarks

Most parameters are
dimensions
.
The StringIn argument must be the fully qualified dimension name (for example, "D1@Base-Extrude") for this method. However, the full dimension name is not needed if you use
IFeature::IParameter
or
IFeature::Parameter
.
Some characters are recognized as special characters. The use of these characters in names or parts or features can cause this method to fail to return a dimension. These special characters are not recognized in names of parts or features:
at sign ( @ )
period ( . )
backslash ( / )

## Examples

- Change Dimension (VBA) (Change_Dimension_Example_VB.htm)
- Get Depth of Extrusion (VBA) (Get_Depth_of_Extrusion_Example_VB.htm)
- Modify Plane By Changing System Value (VBA) (Modify_Plane_by_Changing_System_Value_Example_VB.htm)
- Recalculate Bounding Box (C#) (Recalculate_Bounding_Box_Example_CSharp.htm)
- Recalculate Bounding Box (VB.NET) (Recalculate_Bounding_Box_Example_VBNET.htm)
- Recalculate Bounding Box (VBA) (Recalculate_Bounding_Box_Example_VB.htm)

## See Also

- `IModelDoc2.IParameter`
- `IModelDoc2.SetParamValue`