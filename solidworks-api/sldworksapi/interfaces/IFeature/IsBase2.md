---
type: method
interface: IFeature
member: IsBase2
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.ISetBody3
  - IFeature.SetBody2
keywords:
  - base
  - feature
  - isbase2
  - ifeature
  - base2
  - boolean
---

# IFeature.IsBase2

Gets whether this feature is a base feature.

## Signature

```csharp
System.Boolean IsBase2()
```
## Parameters

None.

## Return Value

True if this is a base feature, false if not

## Remarks

Any feature that creates a solid body is a base feature. For example:
An extrude operation creates a solid body; therefore, that feature is a base feature.
A body imported via an IGES file is a base feature.
However, a fillet operation does not create a solid body; therefore, that feature is not a base feature.
In a multibody environment, more than one feature can return true. Thus, a lot of features can be base features in a multibody environment.

## See Also

- `IFeature.ISetBody3`
- `IFeature.SetBody2`