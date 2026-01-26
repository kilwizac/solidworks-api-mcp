---
type: method
interface: IBody2
member: IHide
returns: void
parameters:
  -
    name: Part
    type: PartDoc
    description: IPartDoc
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.Hide
keywords:
  - temporary
  - bodies
  - ihide
  - ibody2
  - body2
  - hide
  - part
  - doc
  - void
---

# IBody2.IHide

Hides a temporary body using the specified part's context.

## Signature

```csharp
void IHide( 
   PartDoc
Part
)
```
## Parameters

- `Part` (PartDoc): IPartDoc

## Return Value

Unknown.

## Remarks

While SOLIDWORKS is displaying your IBody2 object using
IBody2::Display3
, you cannot release it explicitly or implicitly. Before releasing or allowing your IBody2 object to be released, you must call this method to prevent it from being displayed.
COM applications should avoid explicitly releasing the IBody2 object by calling IBody2->Release() while it is being displayed by SOLIDWORKS.

## See Also

- `IBody2.Hide`