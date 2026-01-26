---
type: property
interface: IMate2
member: DisplayDimension2
returns: DisplayDimension
parameters:
  -
    name: Index
    type: System.Int32
    description: Number indicating which mate's display dimension to get (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - dimensions
related:
  - IMate2.MaximumVariation
  - IMate2.MinimumVariation
keywords:
  - display
  - dimensions
  - see
  - also
  - idisplaydimension
  - mate
  - displaydimension2
  - imate2
  - mate2
  - dimension2
  - index
  - int32
  - dimension
  - change
  - gear
  - vba
  - edit
readonly: true
---

# IMate2.DisplayDimension2

Gets the specified display dimension for this mate.

## Signature

```csharp
DisplayDimension DisplayDimension2( 
   System.Int32
Index
) {get;}
```
## Parameters

- `Index` (System.Int32): Number indicating which mate's display dimension to get (see Remarks )

## Return Value

Display dimension for the specified mate

## Remarks

This property returns the first display dimension for all types of mates and the second display dimension for gear mates only.
A gear mate has two feature dimensions whose values form the gear ratio. All other mates return NULL/Nothing for the second display dimension.

## Examples

- Change Dimensions of Gear Mate (VBA) (Change_Dimensions_of_Gear_Mate_Example_VB.htm)
- Edit Mate (VBA) (Edit_Mate_Example_VB.htm)

## See Also

- `IMate2.MaximumVariation`
- `IMate2.MinimumVariation`