---
type: property
interface: IFeature
member: GetPropertyExtension
returns: System.Object
parameters:
  -
    name: ID
    type: System.Int32
    description: 0
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.AddPropertyExtension
  - IFeature.ResetPropertyExtension
keywords:
  - extension
  - getpropertyextension
  - ifeature
  - feature
  - id
  - int32
  - object
readonly: null
---

# IFeature.GetPropertyExtension

Gets the property extension on this feature.

## Signature

```csharp
System.Object GetPropertyExtension( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): 0

## Return Value

Value of the property extension on this feature

## Remarks

SOLIDWORKS recommends that you use the
IAttribute
,
IAttributeDef
, or
IParameter
interfaces instead of this method. These interfaces provide more flexibility.

## See Also

- `IFeature.AddPropertyExtension`
- `IFeature.ResetPropertyExtension`