---
type: method
interface: IBodyFolder
member: SetAutomaticUpdate
returns: System.Boolean
parameters:
  -
    name: Update
    type: System.Boolean
    description: True to automatically update cut lists, false to update them manually
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IBodyFolder.GetAutomaticUpdate
keywords:
  - cut
  - lists
  - setautomaticupdate
  - ibodyfolder
  - body
  - folder
  - automatic
  - update
  - boolean
---

# IBodyFolder.SetAutomaticUpdate

Sets whether to automatically update cut lists.

## Signature

```csharp
System.Boolean SetAutomaticUpdate( 
   System.Boolean
Update
)
```
## Parameters

- `Update` (System.Boolean): True to automatically update cut lists, false to update them manually

## Return Value

True if successful, false if not

## Remarks

To update cut lists...
Call...
Manually
IBodyFolder::UpdateCutList
Automatically
IBodyFolder::SetAutomaticUpdate

## Examples

- IBodyFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBodyFolder)

## See Also

- `IBodyFolder.GetAutomaticUpdate`