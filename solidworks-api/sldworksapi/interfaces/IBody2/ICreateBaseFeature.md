---
type: method
interface: IBody2
member: ICreateBaseFeature
returns: System.Boolean
parameters:
  -
    name: BodyIn
    type: Body2
    description: Body on which to create base feature
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
  - geometry
related:
  - IBody2.CreateBaseFeature
keywords:
  - base
  - feature
  - icreatebasefeature
  - ibody2
  - body2
  - create
  - body
  - boolean
---

# IBody2.ICreateBaseFeature

Creates a base feature for the imported body.

## Signature

```csharp
System.Boolean ICreateBaseFeature( 
   Body2
BodyIn
)
```
## Parameters

- `BodyIn` (Body2): Body on which to create base feature

## Return Value

True if the base feature was created, false if not

## See Also

- `IBody2.CreateBaseFeature`