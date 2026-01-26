---
type: method
interface: IAnnotation
member: CheckSpelling
returns: System.Object
parameters:
  -
    name: Options
    type: System.Int32
    description: Spell-check options as defined in swCheckSpellingOptions_e
  -
    name: Dictionary
    type: System.String
    description: Full path and filename of user dictionary to use (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - checkspelling
  - iannotation
  - annotation
  - check
  - spelling
  - options
  - int32
  - dictionary
  - string
  - object
---

# IAnnotation.CheckSpelling

Spell checks the text in this annotation.

## Signature

```csharp
System.Object CheckSpelling( 
   System.Int32
Options
,
   System.String
Dictionary
)
```
## Parameters

- `Options` (System.Int32): Spell-check options as defined in swCheckSpellingOptions_e
- `Dictionary` (System.String): Full path and filename of user dictionary to use (see Remarks )

## Return Value

Array of the misspelled words in this annotation

## Remarks

The SOLIDWORKS spell checker always uses a main dictionary, which is language specific. Use the Dictionary argument to specify an additional dictionary. If Dictionary is left blank, then no additional user dictionary is used.
You can also specify additional custom dictionaries by adding them in the appropriate location in the SOLIDWORKS registry.