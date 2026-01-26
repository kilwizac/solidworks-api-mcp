---
type: property
interface: ICommandManager
member: NumberOfGroups
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.GetGroups
keywords:
  - numberofgroups
  - icommandmanager
  - command
  - manager
  - number
  - groups
  - int32
readonly: true
---

# ICommandManager.NumberOfGroups

Gets the number of CommandGroups.

## Signature

```csharp
System.Int32 NumberOfGroups {get;}
```
## Parameters

None.

## Return Value

Number of CommandGroups

## Remarks

Call this method before calling
ICommandManager::IGetGroups
to determine the size of the array for that method.

## See Also

- `ICommandManager.GetGroups`