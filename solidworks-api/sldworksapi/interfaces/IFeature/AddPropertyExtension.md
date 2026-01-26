---
type: property
interface: IFeature
member: AddPropertyExtension
returns: System.Int32
parameters:
  -
    name: PropertyExtension
    type: System.Object
    description: Value of the property extension to add to this feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetPropertyExtension
  - IFeature.ResetPropertyExtension
keywords:
  - extension
  - addpropertyextension
  - ifeature
  - feature
  - add
  - object
  - int32
readonly: null
---

# IFeature.AddPropertyExtension

Adds a property extension to this feature.

## Signature

```csharp
System.Int32 AddPropertyExtension( 
   System.Object
PropertyExtension
)
```
## Parameters

- `PropertyExtension` (System.Object): Value of the property extension to add to this feature

## Return Value

1 if the property extension is added to the feature, -1 if not

## Remarks

This method does not support adding multiple property extensions to the same feature.
To use this method:
Declare the variable.
Assign the variable a value: float, integer, or string.
Call this method to add the value to the feature.
NOTE
: SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, or
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IFeature.GetPropertyExtension`
- `IFeature.ResetPropertyExtension`