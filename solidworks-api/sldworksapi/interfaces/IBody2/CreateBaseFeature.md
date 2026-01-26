---
type: method
interface: IBody2
member: CreateBaseFeature
returns: System.Boolean
parameters:
  -
    name: BodyIn
    type: System.Object
    description: Body on which to create base feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IBody2.ICreateBaseFeature
keywords:
  - base
  - feature
  - createbasefeature
  - ibody2
  - body2
  - create
  - body
  - object
  - boolean
---

# IBody2.CreateBaseFeature

Creates a base feature for the imported body.

## Signature

```csharp
System.Boolean CreateBaseFeature( 
   System.Object
BodyIn
)
```
## Parameters

- `BodyIn` (System.Object): Body on which to create base feature

## Return Value

True if the base feature was created, false if not

## See Also

- `IBody2.ICreateBaseFeature`