---
type: method
interface: IMateControllerFeatureData
member: SetValues
returns: void
parameters:
  -
    name: PositionName
    type: System.String
    description: Name of mate position
  -
    name: Values
    type: System.Object
    description: Array of values for all mates in PositionName
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - setvalues
  - imatecontrollerfeaturedata
  - mate
  - controller
  - feature
  - data
  - values
  - position
  - name
  - string
  - object
  - void
---

# IMateControllerFeatureData.SetValues

Sets the mate values for the specified mate position.

## Signature

```csharp
void SetValues( 
   System.String
PositionName
,
   System.Object
Values
)
```
## Parameters

- `PositionName` (System.String): Name of mate position
- `Values` (System.Object): Array of values for all mates in PositionName

## Return Value

Unknown.

## Remarks

The number of items in Values must correspond to the number of mates passed to
IMateControllerFeatureData::Initialize
or the number of pre-selected mates.

## Examples

- IMateControllerFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMateControllerFeatureData)