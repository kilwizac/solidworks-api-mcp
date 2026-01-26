---
type: method
interface: IFeature
member: Parameter
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of parameter (for example, "D1")
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IDimension.FullName
  - IFeature.IParameter
  - IModelDoc2.IParameter
keywords:
  - parameters
  - see
  - also
  - iparameter
  - features
  - parameter
  - ifeature
  - feature
  - name
  - string
  - object
  - change
  - dimension
  - vba
  - vb
  - net
---

# IFeature.Parameter

Gets a pointer to the object for the specified parameter or a pointer to the specified parameter.

## Signature

```csharp
System.Object Parameter( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of parameter (for example, "D1")

## Return Value

Parameter (see Remarks )

## Remarks

Most parameters are
dimensions
.
The Name argument for this method does not have to be the "full" dimension name. For example, you only need to pass "D1" not "D1@Base-Revolve". The full dimension name is required if you call
IModelDoc2::Parameter
.
SOLIDWORKS recognizes some characters as special characters. The use of these characters in part or feature names can cause this method to fail and not return a dimension. These special characters are not recognized in names of parts or features:
at sign ( @ )
period ( . )
backslash ( / )

## Examples

- Change Dimension (VBA) (Change_Dimension_Example_VB.htm)
- Change Dimension (VB.NET) (Change_Dimension_Example_VBNET.htm)
- Change Dimension (C#) (Change_Dimension_Example_CSharp.htm)

## See Also

- `IDimension.FullName`
- `IFeature.IParameter`
- `IModelDoc2.IParameter`