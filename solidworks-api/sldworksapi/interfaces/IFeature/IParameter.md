---
type: method
interface: IFeature
member: IParameter
returns: Dimension
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
  - IFeature.Parameter
  - IModelDoc2.Parameter
keywords:
  - parameters
  - see
  - also
  - iparameter
  - features
  - ifeature
  - feature
  - parameter
  - name
  - string
  - dimension
---

# IFeature.IParameter

Gets a pointer to the object for the specified parameter or a pointer to the specified parameter.

## Signature

```csharp
Dimension IParameter( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of parameter (for example, "D1")

## Return Value

Dimension

## Remarks

Most parameters are
dimensions
.
The Name argument for this method does not have to be the "full" dimension name. For example, you only need to pass "D1" not "D1@Base-Revolve". The full dimension name is required if you call
IModelDoc2::IParameter
.
SOLIDWORKS recognizes some characters as special characters. The use of these characters in part or feature names can cause this method to fail and not return a dimension. These special characters are not recognized in names of parts or features:
at sign ( @ )
period ( . )
backslash ( / )

## See Also

- `IDimension.FullName`
- `IFeature.Parameter`
- `IModelDoc2.Parameter`