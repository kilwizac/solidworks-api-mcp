---
type: method
interface: ILayer
member: GetItems
returns: System.Object
parameters:
  -
    name: ItemType
    type: System.Int32
    description: Items to get as defined in swLayerItemsOption_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - items
  - layers
  - getitems
  - ilayer
  - layer
  - item
  - type
  - int32
  - object
---

# ILayer.GetItems

Gets the items on this layer.

## Signature

```csharp
System.Object GetItems( 
   System.Int32
ItemType
)
```
## Parameters

- `ItemType` (System.Int32): Items to get as defined in swLayerItemsOption_e

## Return Value

Array of layer items