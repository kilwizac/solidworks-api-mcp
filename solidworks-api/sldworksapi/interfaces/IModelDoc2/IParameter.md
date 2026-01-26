---
type: method
interface: IModelDoc2
member: IParameter
returns: Dimension
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
  - IModelDoc2.Parameter
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
---

# IModelDoc2.IParameter

Gets the specified parameter.

## Signature

```csharp
Dimension IParameter( 
   System.String
StringIn
)
```
## Parameters

- `StringIn` (System.String): Name of parameter (for example, "D1@Base-Revolve")

## Return Value

Dimension

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

## See Also

- `IModelDoc2.Parameter`
- `IModelDoc2.SetParamValue`